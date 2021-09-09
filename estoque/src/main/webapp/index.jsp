<%@page import="vo.Produto"%>
<%@page import="ctr.ProdutoProcess"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Estoque de produtos</title>
</head>
<body>
	<p>Estoque de produtos</p>
	
	<form method="GET" action="index.jsp">
		<label>ID</label><input type="number" name="id"/>
		<label>Nome</label><input type="text" name="nome"/>
		<label>Descrição</label><input type="text" name="descricao"/>
		<label>Valor</label><input type="number" name="valor"/>
		<label>Quantidade</label><input type="number" name="quantidade"/>
	</form>
	<input type="submit" value="Adicionar"></input>
	<a href="index.jsp">Cancelar</a>
	<table>
		<tr>
			<th>ID</th>
			<th>Nome</th>
			<th>Descricao</th>
			<th>Valor</th>
			<th>Quantidade</th>
		</tr>
	</table>
<%
	ProdutoProcess.testes();
	for(Produto p: ProdutoProcess.produtos){ 
		out.print(p.toHTML());
		out.print("</br>");
	}
	
	
	
%>
	
</body>
</html>