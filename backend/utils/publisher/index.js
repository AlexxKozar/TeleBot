import Publisher from './Publisher';
import {getPostToPublish} from '../../api/mongo/'


export const startPublisher = () => {

    const publisher = new Publisher(getPostToPublish, post => {
        console.log('Post is published');
        console.log(post);
      });
      
      publisher.initPublisher(500);


      return publisher;

}


