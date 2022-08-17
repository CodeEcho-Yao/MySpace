<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts"/>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';
import { reactive } from 'vue';

export default {
  name: 'UserProfileView',
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts
  },
  setup() {
    const user = reactive({
      id: 1,
      username: "CodeEcho",
      firstName: "Echo",
      lastName: "Code",
      followerCount: 1313,
      is_followed: false,
    });

    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          content: "前程万里毛羽需丰, 一旦奋飞何其雄"
        },
        {
          id: 2,
          userId: 1,
          content: "Web"
        },
        {
          id: 3,
          userId: 1,
          content: "vue3"
        },
      ]
    })

    const follow = () => {
      if(user.is_followed) return ;
      user.is_followed = true;
      user.followerCount ++;
    };

    const unfollow = () => {
      if(!user.is_followed) return;
      user.is_followed = false;
      user.followerCount --;
    };

    return {
      user,
      follow,
      unfollow,
      posts,
    }
  }
}
</script>

<style scoped>
</style>