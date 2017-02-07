 /*
  *皮肤List
  *
  **/
 var thinList = new Map();
 thinList.set(0, "img/bg0.jpg");
 thinList.set(1, "img/bg1.jpg");
 thinList.set(2, "img/bg2.jpg");
 thinList.set(3, "img/bg3.jpg");
 thinList.set(4, "img/bg4.jpg");
 var currentThin = 0; //当前皮肤
 var tempThin = currentThin; //皮肤选择记录项

 /**
  *显示皮肤框
  **/
 function showThin() {
 	$("#thinwin").css("height", $(document).height());
 	$("#thinwin").removeClass("hidden");
 	$("#thinwin").addClass("show");
 	switchShow(thinList.get(tempThin));
 }
 /**
  *隐藏皮肤框
  **/
 function hideThin() {
 	$("#thinwin").removeClass("show");
 	$("#thinwin").addClass("hidden");
 }

 /*确定鼠标点击的位置*/
 $("#thinwin").click(function(event) {
 	//点击坐标
 	var clickX = event.clientX;
 	var clickY = event.clientY;
 	//内部div对象坐标
 	var left = $("#thinleft");
 	var right = $("#thinright");
 	var center = $("#thinshow");
 	var bottom = $("#thinselector");
 	//左侧
 	var leftX = left[0].offsetLeft;
 	var leftY = left[0].offsetTop;
 	var leftH = left[0].offsetHeight;
 	var leftW = left[0].offsetWidth;
 	//右侧
 	var rightX = right[0].offsetLeft;
 	var rightY = right[0].offsetTop;
 	var rightH = right[0].offsetHeight;
 	var rightW = right[0].offsetWidth;
 	//中间
 	var centerX = center[0].offsetLeft;
 	var centerY = center[0].offsetTop;
 	var centerH = center[0].offsetHeight;
 	var centerW = center[0].offsetWidth;
 	//底部
 	var bottomX = bottom[0].offsetLeft;
 	var bottomY = bottom[0].offsetTop;
 	var bottomH = bottom[0].offsetHeight;
 	var bottomW = bottom[0].offsetWidth;
 	if (((clickY < leftY) || (clickX > leftX + leftW) || (clickY > leftY + leftH)) && ((clickX < rightX) || (clickY < rightY) || (clickY > rightH + rightY)) && ((clickX < centerX) || (clickX > centerX + centerW) || (clickY < centerY) || (clickY > centerY + centerH)) && ((clickY < bottomY) || (clickY > bottomY + bottomH))) {
 		tempThin = currentThin;
 		switchShow(thinList.get(tempThin));
 		hideThin();
 	}
 });
 /*设置皮肤*/
 function setBack(param) {
 	$("body").eq(0).css({
 		"background": "url('" + param + "')  no-repeat",
 		"background-size": "cover",
 		"background-position": "center center",
 		"background-attachment": "fixed"
 	});
 }

 /*皮肤展示框背景*/
 function switchShow(param) {
 	$("#thinshow").css("background-image", "url('../" + param + "')");
 }
 /**
  *main切换菜单效果
  */
 var lastItem = 'Home'; //上一个菜单
 function menudef(param) {
 	$("#menu" + param).addClass("menufocus");
 	if (param != lastItem) {
 		$("#menu" + lastItem).removeClass("menufocus");
 	}
 	lastItem = param;
 	localStorage.setItem('menu', lastItem);
 	$.ajax({
 		url: param,
 		type: 'get', //GET
 		data: {
 			"id": "20170001",
 			"name": "覃雨",
 			"sex": 0,
 			"thin": 0
 		},
 		dataType: 'html',
 		success: function(data) {
 			console.log("走到这儿就失败了");
 			$("#content").empty();
 			$("#content").append(data);
 		},
 		error: function(xhr, textStatus) {
 			console.log("失败乃成功之母");
 			$("#content").empty();
 			$("#content").append(xhr.responseText);
 		},
 		complete: function() {
 			console.log('结束');
 		}
 	});
 }

 /*加载时执行*/
 function loadrun() {
 	var menu = localStorage.getItem('menu');
 	if (menu == 'null') {
 		localStorage.setItem('menu', lastItem);
 		console.log(menu);
 	} else {
 		lastItem = menu;
 	}
 	$("#menu" + lastItem).addClass("menufocus");
 	$.ajax({
 		url: '/getUser',
 		type: 'POST', //GET
 		data: {
 			"id": "node20170001",
 			"name": "覃雨",
 			"sex": 0,
 			"thin": 0
 		},
 		dataType: 'json',
 		success: function(data) {
 			//皮肤初始化
 			currentThin = data.thin;
 			tempThin = currentThin;
 			setBack(thinList.get(currentThin));
 		},
 		error: function(xhr, textStatus) {
 			console.log("failed");
 		},
 		complete: function() {
 			console.log('结束');
 		}
 	});
 	menudef(lastItem);
 }


 /*皮肤左右键切换*/
 function switchLeftOrRight(param) {
 	if (param == 1) {
 		if (tempThin > 0) {
 			tempThin = tempThin - 1;
 			switchShow(thinList.get(tempThin));
 		} else {
 			tempThin = 4;
 			switchShow(thinList.get(tempThin));
 		}
 	} else if (param == 2) {
 		if (tempThin < 4) {
 			tempThin = tempThin + 1;
 			switchShow(thinList.get(tempThin));
 		} else {
 			tempThin = 0;
 			switchShow(thinList.get(tempThin));
 		}
 	}
 }
 /*显示确认皮肤*/
 function showSwitch() {
 	$("#switch").removeClass("hidden");
 	$("#switch").addClass("show");
 }
 /*隐藏确认皮肤*/
 function hideSwitch() {
 	$("#switch").removeClass("show");
 	$("#switch").addClass("hidden");
 }
 /*皮肤选择框切换*/
 function switchSelect() {
 	hideThin();
 	currentThin = tempThin;
 	$.ajax({
 		url: '/updateUser',
 		type: 'POST', //GET
 		data: {
 			"id": "node20170001",
 			"name": "覃雨",
 			"sex": 0,
 			"thin": currentThin
 		},
 		dataType: 'json',
 		success: function(data) {
 			if (data.result == "ok") {
 				console.log("保存成功!");
 				setBack(thinList.get(currentThin));
 			} else {
 				alert("保存失败");
 			}
 		},
 		error: function(xhr, textStatus) {
 			console.log("failed");
 		},
 		complete: function() {
 			console.log('结束');
 		}
 	});
 }

 window.onbeforeunload = function() {

 }
 window.onunload = function() {
 	//localStorage.setItem('menu', null);
 }