<script setup lang="ts">
  import { logout } from '@/stores/session';
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  let isActive = ref(false);
  

</script>

<template>
  <div className = 'nav-bar'>
    <nav>
      <router-link exact="true" activeclassname="active" to="/">
        <font-awesome-icon icon="fa-solid fa-home"/>
      </router-link>
      <router-link exact="true" activeclassname="active" className="workout-link" to="/workout">
        <font-awesome-icon icon="fa-solid fa-dumbbell"/>
      </router-link>
      <router-link exact="true" activeclassname="active" className="weight-tracker-link" to="/weighttracker">
        <font-awesome-icon icon="fa-solid fa-weight-scale"/>
      </router-link>
      <button activeclassname="active" className="logout-link" @click="logout()"> 
        <font-awesome-icon icon="fa-solid fa-right-from-bracket"/>
      </button>
    </nav>

  </div>

    
</template>

<style lang="scss">
    .nav-bar{
    background: #181818;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;

    nav{
        display: block;
        text-align: center;
        position: absolute;
        height: 210px;
        top: 50%;
        margin-top: -120px;
        width: 100%;

        a {
            font-size: 22px;
            color: #4d4d4e;
            display: block;
            line-height: 51px;
            height: 51px;
            position: relative;
            text-decoration: none;

            i{
                transition: all 0.3s ease-out;
            }

            &:hover{
                color:#ffd700;

                svg {
                    opacity: 0;
                }
        
                &:after {
                    opacity: 1;
                }
            }


            &:after {
                content: '';
                font-size: 9px;
                letter-spacing: 2px;
                position: absolute;
                bottom: 0;
                display: block;
                width: 100%;
                text-align: center;
                opacity: 0;
                -webkit-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;
            }
            &:first-child {
                &:after {
                content: 'Home';
                }
            }
        }
        a.workout-link {
            &:after {
            content: 'Workouts';
            }
        }
    
        a.weight-tracker-link {
            &:after {
            content: 'Weight';
            }
        }
    
        button.logout-link {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
    
        a.active {
            svg {
            color: #ffd700;
            }
        }
    }
    ul {
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: block;
        padding: 0;
        list-style: none;
        text-align: center;
        margin: 0;
    
        li {
          a {
            padding: 7px 0;
            display: block;
            font-size: 15px;
            line-height: 16px;
            color: #4d4d4e;
          }
    
          &:hover {
            .anchor-icon {
              color: #ffd700;
            }
          }
        }
    }
}
@media screen and (max-width: 1200px) {
    .nav-bar { 
      background: transparent;
      position: initial;
      height: auto;
      min-height: auto;
  
       ul, nav {
        display: none;
       }
  
       nav {
        width: 100%;
        top: 0;
        left: 0;
        background: #181818;
        height: 100%;
        margin: 0;
        z-index: 2;
        position: fixed;
  
        &.mobile-show {
          display: block;
        }
  
        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        a:after {
          opacity: 1;
          position: initial;
          width: auto;
          margin-left: 10PX;
        }
  
        a svg {
          opacity: 1 !important;
        }
       }
  
       .hamburger-icon,
       .close-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          display: block;
       }
    }
}
</style>