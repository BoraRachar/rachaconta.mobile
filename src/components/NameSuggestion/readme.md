# Como usar o componente

```js
  import NameSuggestion from '@/src/components/NameSuggestion'
```

## Buscar os nomes na API
  ```js 
    const namesSuggestionFromApi = [
      '@joão_silva95',
      '@joãosilva2024',
      'joão.silva-br',
    ]
  ```

## Função para lidar com o retorno do componente com o nome selecionado
  ```js
    const getNameSelected = (nameSelected: string) => {
      console.log('name selected:', nameSelected)
    }
  ```

## Usar o componentes
  ```js
    <NameSuggestion
      suggestions={namesSuggestionFromApi}
      onNameSelect={getNameSelected}
    />
  ```