import React from 'react';
import familypicture from '../assets/familypicture.jpg';

function Blog() {
    return (
        <div>
            <h1>Alex's Web Development Blog </h1>
            <h2> Hello, and welcome to Alex's Blog</h2>
            <hr></hr>
            <h3>Meet my Family 😍 </h3>
            <p>Welcome to my blog page! I’m Alex and I live with my boyfriend Zach and my daughter Surie. We have a few furry friends, Otis the Miniature Poodle, Meredith Grey the Neblung Cat, and Firulais the Black Cat. We’ve made quite the home for ourselves in the sunny and beautiful city of Los Angeles. We all have our fair share of hobbies together make a great unit. You can find us at the stables on the weekend horse riding, or sitting in our living room enjoying tunes around the piano, or just relaxing on a Saturday night watching a family movie. One thing we all have in common is we like to spend time reading. I enjoy books about mysteries and tech, Zach enjoys books about computer science and history, and Surie enjoys books about girls empowerment.</p>
            <img src={familypicture} width="300" height="300" />
        </div>
    )
}

export default Blog