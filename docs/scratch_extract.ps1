$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('d:\SEM_3\AWT\FA1\Formative Assessment AWT 2026-27.docx')
$text = $doc.Content.Text
$doc.Close()
$word.Quit()
$text | Out-File -FilePath 'd:\SEM_3\AWT\FA1\doc_content.txt' -Encoding utf8
Write-Output "Done"
