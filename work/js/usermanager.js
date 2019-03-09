//JavaScript Document
$(function($){
	// 你可以在这里继续使用$作为别名
	//表格初始化
	var table = $("#usertab");   //等价于document.getElementById("usertab")
	
	table.bootstrapTable(
		{
		    height:'600px',
			data:[
			{
				"id":1,
				"username":"李明",
				"sex":"男",
				"age":12,
				"phone":13212341324,
				"address":"福建星网锐捷科技园"
			}
			],
			columns:[
			  {
			  	field:'select',
			  	checkbox:true,
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'id',
			  	title:'编号',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'username',
			  	title:'用户名',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'sex',
			  	title:'性别',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'age',
			  	title:'年龄',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'phone',
			  	title:'电话',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			  {
			  	field:'address',
			  	title:'住址',
			  	align:"center",
			  	valign:'middle',		  	
			  },
			
			]
			
		}
		
	);
 
	
});
