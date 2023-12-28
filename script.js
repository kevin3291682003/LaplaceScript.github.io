// 生成卡牌的邏輯，傳入卡牌編號作為參數
function generateCard(cardNumber) {
  // 在右側的預覽區顯示生成的卡牌網址
  var cardPreview = document.getElementById("cardPreview");
  //cardPreview.innerHTML = "img/" + cardNumber + ".png";
  
  var str = 'hello!';
  if(document.getElementById('big'). checked == true)
	  str = "[#p spr_path=\"\" spr_name=\"" + cardNumber + "\" width=\"792\" height=\"1024\"]";
  if(document.getElementById('small'). checked == true)
	str = "[#p spr_path=\"\" spr_name=\"" + cardNumber + "\" width=\"396\" height=\"512\"]";

	cardPreview.innerHTML=str;

const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}


//[#p spr_path="" spr_name="IconLike231113" width="380" height="380"]