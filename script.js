// 生成卡牌的邏輯，傳入卡牌編號作為參數
function generateCard(cardNumber) {
  // 在右側的預覽區顯示生成的卡牌網址
  var cardPreview = document.getElementById("cardPreview");
  //cardPreview.innerHTML = "img/" + cardNumber + ".png";
  
  
  if(document.getElementById('big'). checked == true)
	  cardPreview.innerHTML = "[#p spr_path=\"\" spr_name=\"" + cardNumber + "\" width=\"792\" height=\"1024\"]";
  if(document.getElementById('small'). checked == true)
	cardPreview.innerHTML = "[#p spr_path=\"\" spr_name=\"" + cardNumber + "\" width=\"396\" height=\"512\"]";
}


//[#p spr_path="" spr_name="IconLike231113" width="380" height="380"]