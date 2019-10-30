var tabBox = {
	
	liSelected : null,
	
	onTabClicked : function(){
		if(tabBox.liSelected != null){
			tabBox.liSelected.className = "";
		}
		//선택
		this.className= "selected"; //여기서 this의 의미는? 이벤트가 일어났을때 호출되는 함수에서의 의미는 여기에서 element를 의미 객체 이기 때문에 this를 tabBox로 불러줘도됨
		tabBox.liSelected = this; //객체안에 함수를 불러올때는 this이지만 이벤트 매핑에 대해서 가져오는 함수는 element이기 때문에 tabBox를 넣어줌 liSelected가 tabBox안에 있기 때문에
	},
	
	init : function(){
		var div = document.getElementsByClassName("tab-box")[0];
		var ul = div.childNodes[1];
		var lis = ul.getElementsByTagName("li");
		
		for(var i = 0; i<lis.length; i++){
			lis[i].onclick = this.onTabClicked; //this를 넣어서 tabBox에서 onTabClicked를 찾음 event함수에서 this는 onTabClicked을 의미하지 않음
		}
	}
}

window.onload = function(){
	
	tabBox.init();
	

}