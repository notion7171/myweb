<%@page language="java" contentType="test/html ; charset=EUC-KR" pageEncodig="EUC-KR"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET 방식 요청</title>
</head>

<body>

    <!--jsp 문법 작성-->
    <%
    String strName=request.getParameter("name");
    String strMajor=request.getParameter("major");
    out.println("이름: " + strName + "<br>");
    out.println("학과: " + strMajor + "<hr/>");
    %>
    웹 브라우저 URL 주소 입력 부분을 살펴보세요.
    
</body>
</html>