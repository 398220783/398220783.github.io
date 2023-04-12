Attribute VB_Name = "模块1"
Sub RemoveDuplicatesAndMerge()
    Dim lastRow As Long
    Dim i As Long
    
    lastRow = Cells(Rows.Count, "A").End(xlUp).Row
    
    Range("A1:B" & lastRow).Sort key1:=Range("A1"), order1:=xlAscending, Header:=xlYes
        
    For i = lastRow To 2 Step -1
        If Cells(i, 1).Value = Cells(i - 1, 1).Value Then
         If Cells(i, 2).Value = Cells(i - 1, 2).Value Then
            Cells(i - 1, 3).Value = Cells(i - 1, 3).Value & " " & Cells(i, 3).Value
            Rows(i).EntireRow.Delete
        End If
        End If
    Next i
    
    cc = Cells(Rows.Count, "C").End(xlUp).Row
    
    For j = 2 To cc
    
    '判断单元格空格有多少个

'    Range("d" & j) = "=LEN(C" & j & ")-LEN(SUBSTITUTE(C" & j & "," & """" & " " & """" & "," & """" & "" & """" & "))+1"
    sr = Range("c" & j)
    Range("e" & j) = Len(sr) - Len(Replace(sr, " ", "")) + 1
    
     Next j
    
    
End Sub


'此代码会按照A列的升序排序，然后遍历所有行，如果在当前行和前一行中具有相同的数值，
'则将相应的B列值合并在一起，并删除当前行。请注意，在合并B列数据时，
'此代码使用逗号与空格分隔符。如果您需要不同的分隔符，请修改该语句以满足您的要求。
