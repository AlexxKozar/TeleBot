import Publisher from './Publisher';
import {getPostToPublish, changePostStatus} from '../../api/mongo/'



export const startPublisher = () => {

    const publisher = new Publisher(getPostToPublish, post => {
        changePostStatus(post.id, 'published')
        .then( res => {
            console.log(res);
            console.log('Post is published');
        console.log(post);
        })
        
        
      });
      
      publisher.initPublisher(1000);


      return publisher;

}


