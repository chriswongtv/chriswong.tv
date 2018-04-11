<template>
  <div id="home">
    <section id="hero" class="container">
      <div class="title">
        CHRIS WONG
      </div>
      <div class="subtitle">
        <span>Lead web developer at HackUCI.</span>
        <span>Former intern and incoming UI Engineer at LinkedIn.</span>
        <span>Computer Science undergrad at UC Irvine.</span>
      </div>
      <div class="hero-links">
        <a href="https://www.github.com/chriswongtv" target="_blank" class="link-underline">GitHub</a>
        <a href="https://www.linkedin.com/in/chriswongtv" target="_blank" class="link-underline">LinkedIn</a>
        <!-- <a href="http://blog.chriswong.tv" target="_blank" class="link-underline">Blog</a> -->
        <a href="https://resume.chriswong.tv" target="_blank" class="link-underline">Resume</a>
      </div>
    </section>
    <section id="card" class="container">
      <div class="card-collection">
        <Card title="HackUCI" imageUri="hackuci" description="Organized Orange County's largest intercollegiate hackathon" link="https://www.hackuci.com"></Card>
        <Card title="LinkedIn" imageUri="linkedin" description="UI Engineer Intern at LinkedIn Jobs" link="https://www.linkedin.com"></Card>
        <Card title="Coolection" imageUri="coolection" description="Intelligent link library" link="https://www.coolection.co"></Card>
        <Card title="Clow" imageUri="clow" description="Awarded Best Big Data Hack at TreeHacks 2016" link="http://blog.chriswong.tv/treehacks"></Card>
        <Card title="JoyFeed" imageUri="joyfeed" description="Winner of HP sponsor prize at AngelHack SF 2016" link="http://blog.chriswong.tv/joyfeed"></Card>
        <Card title="Cogifire" imageUri="cogifire" description="Web development agency" link="http://www.cogifire.com"></Card>
      </div>
    </section>
    <section id="contact">
      <span class="email">
        <i class="far fa-envelope"></i>
        <a href="mailto:chris@cogifire.com" class="email link-underline">&#099;&#104;&#114;&#105;&#115;&#064;&#099;&#111;&#103;&#105;&#102;&#105;&#114;&#101;&#046;&#099;&#111;&#109;</a>
      </span>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Card
  }
}
</script>

<style scoped lang="scss">
$max-tablet-width: 768px;

#home {
  margin-top: 9rem;

  @media screen and (max-width: $max-tablet-width) {
    margin-top: 11vh;
  }

  #hero {
    .title {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 5rem;
      line-height: 1em;
      // background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
      background: linear-gradient(45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
      // background: linear-gradient(-45deg, #EE7752, #E73C7E, #FF0066, #D41872);
      // background: linear-gradient(45deg, #EE7752, #E73C7E, #7579ff, #b224ef);
      // background: linear-gradient(45deg, #EE7752, #E73C7E, #b224ef, #6713d2);
      background-size: 400% 400%;
      -webkit-animation: fadein .5s both, Gradient 15s ease infinite;
      -moz-animation: fadein .5s both, Gradient 15s ease infinite;
      animation: fadein .5s both, Gradient 15s ease infinite;
		  animation-delay: .2s;
      -webkit-background-clip: text;
      color: transparent;

      @media screen and (max-width: $max-tablet-width) {
        font-size: 3.5rem;
      }
    }

    .subtitle {
      font-weight: 300;
      font-size: 1.75rem;
      margin: 2.5rem 0 2.75rem;
      animation: fadein .5s both;
		  animation-delay: .4s;

      >span {
        display: block;

        @media screen and (max-width: $max-tablet-width) {
          &+span {
            padding-top: .75rem;
          }
        }
      }

      @media screen and (max-width: $max-tablet-width) {
        font-size: 1.45rem;
      }
    }

    .hero-links {
      animation: fadein .5s both;
      animation-delay: .65s;

      >a {
        text-decoration: none;
		    color: #57606f;
        font-size: 1.19rem;
        margin-right: 1.5rem;
        text-transform: lowercase;
      }
    }
  }

  #card {
    .card-collection {
      display: flex;
      margin: 9.25rem -.75rem 0 -.75rem;
      flex-direction: row;
      flex-wrap: wrap;
      animation: fadein .5s both;
      animation-delay: .9s;
    }
  }

  #contact {
    text-align: center;
    margin-top: 5.5rem;
    padding: 6.25rem 0;
    background: rgba(223, 249, 251, .65);
    animation: fadein .5s both;
    animation-delay: 1.15s;

    @media screen and (max-width: $max-tablet-width) {
      margin-top: 5rem;
      padding: 6.25rem 0 7.5rem 0;
    }

    .email {
      font-size: 1.3rem;
      opacity: .9;
      animation: fadein .5s both;
      animation-delay: 1.3s;

      >svg {
        margin-right: .15rem;
        padding-top: .1rem;
      }
    }
  }
}
</style>
