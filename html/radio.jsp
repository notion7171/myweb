<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>

<body>
    <%
        String sex=request.getParameter("sex");
        String year=request.getParameter("year");
        String[] subject=request.getParameterValues("subject");
    %>
    <h1>성별: <%=sex%></h1>
    <h1>학년: <%=year%></h1>
    <%
    for(String subjectArray : subject) {
    %>
    <h1>주제: <%=subjectArray%></h1>
    <%
    }
    %>
</body>

</html>