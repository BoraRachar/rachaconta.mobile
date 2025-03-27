import { useEffect, useState } from "react";
import { Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../actions";
import useKeyboardStatus from "@/src/utils/keyboardUtils";

import { ButtonCustomizer } from "@/src/components/ButtonCustomizer";

import Photograph from "@/src/assets/images/photograph.svg";
import Pencil from "@/src/assets/images/pencil.svg";

import { theme } from "@/src/theme";
import { styles as globalStyles } from "@/src/app/styles";
import { styles } from "./styles";
import { verticalScale } from "@/src/utils/responsiveUtils";

interface Categories {
  ativo: boolean;
  dataCadastro: string;
  descricao: string;
  idCategoria: string;
}

const schema = yup.object().shape({
  name: yup.string().required("O campo deve ser preenchido"),
  description: yup.string(),
});

export default function NewGroup() {
  const [image, setImage] = useState<string | null>(null);
  const [categoriesList, setCategoriesList] = useState<Categories[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Escolha uma opção");
  const {
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await api.getCategoriesList();

      const categories = data?.data.filter(
        (item: Categories) => item.ativo === true
      );
      setCategoriesList(categories);
    };

    fetchCategories();
  }, []);


  const isKeyboardVisible = useKeyboardStatus()

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, gap: 8 }}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%" }}
                  alt="imagem do grupo"
                />
              ) : (
                <Photograph width={32} height={32} />
              )}

              <Pressable style={styles.editIcon} onPress={pickImage}>
                <Pencil width={12} height={12} />
              </Pressable>
            </View>

            <View style={{ flex: 1, gap: 8 }}>
              <Text style={styles.label}>Nome</Text>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Ex: Amigos do Bora"
                    placeholderTextColor={theme.colors.fourth}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.name && (
                <Text style={styles.error}>{errors.name.message}</Text>
              )}
            </View>
          </View>

          {/* Category */}
          <View>
            <Text style={styles.label}>Categoria</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: theme.colors.primaryColor,
                borderRadius: 8,
                marginTop: 8,
              }}
            >
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => {
                  setSelectedCategory(itemValue);
                }}
                mode="dropdown"
                dropdownIconColor={theme.colors.primaryColor}
                style={{
                  width: "100%",
                  height: 54,
                  fontSize: 16,
                  color: theme.colors.primaryColor,
                }}
              >
                {categoriesList &&
                  categoriesList.map((item) => (
                    <Picker.Item
                      key={item.idCategoria}
                      label={item.descricao}
                      value={item.descricao}
                      fontFamily={theme.fontFamily.medium}
                      color={theme.colors.primaryColor}
                    />
                  ))}
              </Picker>
            </View>
          </View>

          {/* Descrição */}
          <View>
            <Text style={styles.label}>Descrição (opcional)</Text>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input, { height: verticalScale(120), textAlignVertical: "top" }]}
                  placeholder="Insira uma breve descrição"
                  placeholderTextColor={theme.colors.fourth}
                  maxLength={100}
                  multiline
                  numberOfLines={10}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description.message}</Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Botão */}
      {!isKeyboardVisible &&
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ButtonCustomizer.Root
            type="tertiaryHalfWidth"
            onPress={() => console.log("cancelar")}
          >
            <ButtonCustomizer.Title
              title="Cancelar"
              customStyles={globalStyles.secondaryButtonText}
            />
          </ButtonCustomizer.Root>

          <ButtonCustomizer.Root
            type="primaryHalfWidth"
            onPress={() => router.push("/groups/newGroup/addParticipants")}
          >
            <ButtonCustomizer.Title
              title="Proximo"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
        </View>
      }
    </View>
  );
}
