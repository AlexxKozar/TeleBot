export default class Publisher{

    constructor(getPostToPublish, publishPost){

        this.postToPublish = null;
        this.getPostToPublish = getPostToPublish;
        this.publishPost = publishPost;

    }

    async initPublisher(period){

        const post = await this.getPostToPublish();

        if(post) {
            this.postToPublish = post[0];
            console.log('Added post to publisher');
            console.log(post);
        }
        
        setInterval(async () => {
      
            console.log('Publisher works');

            if(this.postToPublish && Date.now() >= this.postToPublish.date){
                
                console.log('Post will be published');
                console.log(this.postToPublish)

                this.publishPost(this.postToPublish);
                this.postToPublish = null;

                const nextPost = await this.getPostToPublish();
                if(nextPost) {
                    this.postToPublish = nextPost[0];
                    console.log('Added post to publisher');
                    console.log(nextPost);
                }

            };
          }, period)

    }

    push(post){

        console.log("Push to publisher")
        console.log(this.postToPublish)
        console.log(!this.postToPublish)
        console.log(post)

        if(!this.postToPublish || post.date <= this.postToPublish.date){
            console.log('Pushed post to publisher');
            this.postToPublish = post;
            console.log(post);
        }
        
    }

} 

