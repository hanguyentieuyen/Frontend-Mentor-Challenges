function likeButton(){
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if(heart.src.match("heart.png")){
        heart.src = "./Images/heart_red.png";
        likes.innerHTML = "3,685 likes";
    }else{
        heart.src = "./Images/heart.png";
        likes.innerHTML = " 3,684 likes";
    }
}

// Phương thức string.match() sẽ tìm kiếm các chuỗi con phù hợp với biểu thức chính quy được cung cấp. Phương thức sẽ trả về các chuỗi tìm được dưới dạng một mảng.