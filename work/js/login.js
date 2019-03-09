$(function($){
	$("#loginbtn").on("click",function(e)
	{
		var userName = $("#username").val();
		var passwd = $("#userpwd").val();
		$.ajax({
			url:'loginController.do',
			type:'post',
			data:{
				username:userName,
				passwd:passwd
			},
			error:function{
				alert("服务器超时！");
			},
			success:function(res)
			{
				if(res == 0)
				 window.location.href="index.html";
				else
				 alert("用户名与密码验证失败，请重新登陆！");
				return;
			}
		});
		
	})
	
})
