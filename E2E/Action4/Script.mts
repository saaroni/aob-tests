browser("Accounts - Advantage Bank").Sync
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").Link("Accounts").Highlight
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").Link("Accounts").Click
browser("Accounts - Advantage Bank").Sync
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebTable("Description").highlight
Dim oDesc
Set oDesc = Description.Create
oDesc("title").value = "IBAN"
Set co = Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebTable("Description").ChildObjects (oDesc)
print (co.Count)


