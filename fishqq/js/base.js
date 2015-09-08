/*document.getElementById('iframe').style.height = document.body.clientHeight - 0 + "px";
parent.document.all("iframe").style.height = document.body.scrollHeight;
parent.document.all("iframe").style.width = document.body.scrollWidth;*/
$(document).ready(
	function() {
		$("#loginform").attr("action", "iframe.php");
		$("#u").attr("value", "123");
		$(".input-l").click(function() {
//			$(".err_m").show();
			$(".main").hide();
			$("#iframe").show();
			/*$(document.getElementById('iframe').contentWindow.document.body).html();
			$("#u", document.frames("iframe").document).attr("value", "123");
			$(window.frames["iframe"].document).find("input:hidden").attr("value","true");*/
		});
//		$(window.frames["id_iframe"].document).find("#u").attr("height","5000px")
		/*if ($(".input-p").val == "") {
			$(".err_m").show();
		};*/
		/*else if () {

		};
*/
	}


);
//alert($(".input-u").value);
//document.getElementById('iframe').contentWindow.document.getElementById('u').style.color='red';
//alert($(window.frames["id_iframe"].document).find("#u").html());
window.onload = function() {
//alert($(window.frames["iframe"].document).find("#u").html());
//alert($(window.frames["child"].document).find("#container").attr("height","5000px"))
}