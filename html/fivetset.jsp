<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/fivetest.jsp</title>
</head>
<body>
    <%
        String strId=request.getParameter("ID");
        String strDate=request.getParameter("date");
        String strSex=request.getParameter("sex");
        String strEmail=request.getParameter("email");
        String strMailagree=request.getParameter("mailagree");
        String strPhoneHeader=request.getParameter("phoneheader");
        String strPhoneSecond=request.getParameter("phonesecond");
        String strPhoneThird=request.getParameter("phonethird");
        


    %>
    
    <h1>아이디 : <%=strId%></h1>
    <h1>생년월일 : <%=strDate%></h1>
    <h1>성별 : <%=strSex%></h1>
    <h1>이메일 : <%=strEmail%></h1>
    <h1>메일수신 : <%=strMailagree%></h1>
    <h1>핸드폰 : <%=strPhoneHeader%>-<%=strPhoneSecond%>-<%=strPhoneThird%></h1>
</body>
</html>