const appurl = "https://menuchooser.netlify.app/";

function kakaoShare() {
  //공유 사진
  const image = foodNumber.img;
  //공유 사진 링크
  const shareImg = appurl + image;
  //공유
  const url = foodNumber.link;
  //공유 링크
  const shareURL = appurl + url;
  //결과 카카오톡 공유
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "오늘 뭐 먹지?",
      description: "결과를 확인하세요!",
      imageUrl: shareImg,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "결과보기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
