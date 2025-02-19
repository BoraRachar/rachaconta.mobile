# Responsividade
Funções basicas para responsividade:
 - HorizontalScale(),
 - VerticalScale(),
 - ModerateScale()
 - rem()

## Modo de uso
 - Faça o import das funções
```
import {horizontalScale,verticalScale,moderateScale,rem,} from '@/src/utils/ResponsiveUtils'
```
Em seguida utilize nas propriedades do css passando o valor em px. Exemplo:
```
  width: horizontalScale(200),
  height: verticalScale(96),
  borderRadius: moderateScale(8),
  fontSize: rem(24)
```

### A função ***HorizontalScale*** é usado nas seguintes propriedades css:
 ```
  width,
  marginLeft, MarginRight, marginHorizontal,
  paddingLeft, paddingRight, paddingHorizontal
 ```

### A função ***VerticalScale*** é usado nas seguintes propriedades css:
 ```
  height, lineHeight
  marginTop, MarginBotton, marginVertical,
  paddingTop, paddingBotton, paddingVertical
```

### A função ***ModerateScale*** é usado quando precisa que a fonte escala com tamanho da tela:
```
 font-size, borderRadius
```

### A função ***rem*** convert o px em unidade rem.
 ```
  fontSize: rem(16)
```