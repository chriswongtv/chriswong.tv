<template>
  <div id="home">
    <section id="hero">
      <div class="title">
        CHRIS WONG
      </div>
      <div class="subtitle">
        <span>Lead web developer at HackUCI.</span>
        <span>Former intern and incoming UI Engineer at LinkedIn.</span>
        <span>Computer Science senior at UC Irvine.</span>
      </div>
      <div class="hero-links">
        <a href="https://www.github.com/chriswongtv" target="_blank" class="link-underline">GitHub</a>
        <a href="https://www.linkedin.com/in/chriswongtv" target="_blank" class="link-underline">LinkedIn</a>
        <a href="https://resume.chriswong.tv" target="_blank" class="link-underline">Resume</a>
      </div>
    </section>
    <section id="card">
      <Card title="HackUCI" imageUri="hackuci" description="Organized Orange County's largest intercollegiate hackathon" link="https://www.hackuci.com"></Card>
      <Card title="LinkedIn" imageUri="linkedin" description="UI Engineer Intern at LinkedIn Jobs" link="https://www.linkedin.com"></Card>
      <Card title="Coolection" imageUri="coolection" description="Intelligent link library" link="https://www.coolection.co"></Card>
      <Card title="Clow" imageUri="clow" description="Awarded Best Big Data Hack at TreeHacks 2016" link="http://blog.chriswong.tv/treehacks"></Card>
      <Card title="JoyFeed" imageUri="joyfeed" description="Winner of HP sponsor prize at AngelHack SF 2016" link="http://blog.chriswong.tv/joyfeed"></Card>
      <Card title="Cogifire" imageUri="cogifire" description="Web development agency" link="https://www.cogifire.com"></Card>
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
    margin-top: 12.5vh;
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
      -webkit-animation: Gradient 15s ease infinite;
      -moz-animation: Gradient 15s ease infinite;
      animation: Gradient 15s ease infinite;
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

      span {
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
      a {
        text-decoration: none;
		    color: #57606f;
        font-size: 1.19rem;
        text-transform: lowercase;

        &+a {
          margin-left: 1.5rem;
        }
      }
    }
  }

  #card {
    display: flex;
    margin: 9.25rem -.75rem;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: $max-tablet-width) {
      margin-bottom: 4.5rem;
    }
  }
}
</style>
