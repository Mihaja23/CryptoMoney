<template>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

<div class="wrapper">
    <h1>Our Team</h1>
    <div class="our_team">
        <div class="team_member">
          <div class="member_img">
             <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE08NXL3cKQSQ/profile-displayphoto-shrink_400_400/0/1646673127657?e=1669852800&v=beta&t=sxfc5jD3b1HQvQFZ03ekvwwG2JGqsmSIZmn5HPmRdWY" alt="our_team">
            <div class="social_media">
               <div class="facebook item">
                <a href="https://www.facebook.com/mihajamandresy23"><i class="fab fa-facebook-f"></i></a></div>
                <div class="linkedin item"><a href="https://www.linkedin.com/in/mihaja-randriamaromanana-090aa119b"><i class="fab fa-linkedin-in"></i></a></div>
               <div class="mail item"><a href="mailto:mihaja.randriamaromanana@efrei.net"><i class="fa fa-envelope" aria-hidden="true"></i></a></div>
             </div>
          </div>
          <h3>Randriamaromanana Mihaja</h3>
          <span>Developper Fullstack</span>
          <p>I was responsible for the development of the front end and the back end .</p>
        </div>
        <div class="team_member">
           <div class="member_img">
             <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHkbEY4OeqwWA/profile-displayphoto-shrink_800_800/0/1660832308415?e=2147483647&v=beta&t=_p-EqGo4WWv4T1ZHooIO2iJhQg6-hp4-m5T1bEzhnxw" alt="our_team">
             <div class="social_media">
               <div class="linkedin item"><a href="https://www.linkedin.com/in/pablo-thomas-76043919b"><i class="fab fa-linkedin-in"></i></a></div>
               <div class="mail item"><a href="mailto:pablo.thomas@efrei.net"><i class="fa fa-envelope" aria-hidden="true"></i></a></div>
             </div>
          </div>
          <h3>Pablo Thomas</h3>
          <span>Web developper </span>
          <p>I was in charge of the whole front end, the design of the site and the back end.</p>
      </div>
    </div>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Exo+2|Yatra+One');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Exo 2', sans-serif;
}
.wrapper{
  margin-top: 60px;
  text-align: center;
}

.wrapper h1{
  font-family: 'Yatra One', cursive;
  font-size: 48px;
  color: rgb(0, 0, 0);
  margin-bottom: 25px;
}

.our_team{
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.our_team .team_member{
  width: 250px;
  margin: 5px;
  background: grey;
  padding: 20px 10px;
}

.our_team .team_member .member_img{
  background: grey;  
  max-width: 190px;
  width: 100%;
  height: 180px;
  margin: 0 auto;
  border-radius: 10%;
  padding: 5px;
  position: relative;
  cursor: pointer;
}

.our_team .team_member .member_img img{
  width: 100%;
  height: 100%;
}

.our_team .team_member h3{
  text-transform: uppercase;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 2px;
  margin: 15px 0 0px;
}

.our_team .team_member span{
  font-size: 10px;
}

.our_team .team_member p{
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
}

.our_team .team_member .member_img .social_media{
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0,0,0,0.65);
  width: 95%;
  height: 95%;
  border-radius: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
   transition: all 0.5s ease;
}

.our_team .team_member .member_img .social_media .item{
  margin: 0 10px;
}

.our_team .team_member .member_img .social_media .fab{
  color:rgb(255, 255, 255);
  font-size: 20px;
}

.our_team .team_member .member_img:hover .social_media{
  transform: scale(1);
}
</style>