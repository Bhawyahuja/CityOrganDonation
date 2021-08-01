import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('hosname')
print(searchterm)