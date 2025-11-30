# 将编号转换为文本

## Office VBA 宏
```vba
Sub ConvertNumbersToText()
ActiveDocument.Content.ListFormat.ConvertNumbersToText
End Sub
```

## WPS JS
```js
function ConvertNumbersToText(){
ActiveDocument.Content.ListFormat.ConvertNumbersToText()
}
```