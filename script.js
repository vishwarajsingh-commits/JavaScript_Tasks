const reels = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
  },
  {
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "Code. Sleep. Repeat. That’s the cycle.",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
  },
  {
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "You won’t believe this burger exists 🤯🍔",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  },
  {
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The most underrated smartphone of 2024 📱",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  },
  {
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "GSAP can literally change your career. Start today.",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

var sum='';
reels.forEach(function (i){
    sum= sum+`<div class="reels">
                    <video autoplay loop muted src="${i.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img id="profile" src="${i.userprofile}" alt="">
                            <p>${i.username}</p>
                            <button>${i.isFollowed?'Followed':'Follow'}</button>
                        </div>
                        <p>${i.caption}</p>
                    </div>
                    <div class="side">
                        ${i.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}
                        ${i.likeCount}
                        <i class="ri-chat-1-line">${i.commentCount}</i>
                        <i class="ri-send-ins-line">${i.shareCount}</i>
                        <i class="ri-more-2-line"></i>
                    </div>
                </div>`
})
var all=document.querySelector('.all-reels')
all.innerHTML=sum
