<template>
    <div class="notfound">
        <p class="status">404</p>
        <span>Not Found</span>
        <span>The resource requested could not be found</span>
        <!-- go home -->
        <a href="/">Go home</a>
    </div>
</template>


<style lang="scss" scoped>
    .notfound{
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        text-align: center;
        p{
            font-size: 10rem;
        }

        span{
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

</style>