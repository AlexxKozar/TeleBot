export default class Publisher{

    constructor(getPostToPublish, publishPost){

        this.postToPublish = null;
        this.getPostToPublish = getPostToPublish;
        this.publishPost = publishPost;

    }

    async initPublisher(period){

        const post = await this.getPostToPublish();

        if(post) {
            this.postToPublish = post;
            console.log('Added post to publisher');
            console.log(post);
        }
        
        const timer = setInterval(() => {

            //clearInterval(timer);
      
            console.log('Publisher works');

            if(this.postToPublish && Date.now() == this.postToPublish.date){
                
                console.log('Post will be published');
                console.log(this.postToPublish)

                this.publishPost(this.postToPublish);
                this.postToPublish = null;

            };
          }, period)

    }

    pushPost(post){
        post.date <= this.postToPublish.date ? this.postToPublish = post : null;
        console.log('Pushed post to publisher');
        console.log(post);
    }

} 

