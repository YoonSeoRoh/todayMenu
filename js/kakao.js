const appurl = "https://menuchooser.netlify.app/";

function kakaoShare() {
  //���� ����
  const image = foodNumber.img;
  //���� ���� ��ũ
  const shareImg = appurl + image;
  //����
  const url = foodNumber.link;
  //���� ��ũ
  const shareURL = appurl + url;
  //��� īī���� ����
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "���� �� ����?",
      description: "����� Ȯ���ϼ���!",
      imageUrl: shareImg,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "�������",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
