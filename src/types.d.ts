
export interface Post {
    /** A unique ID number that identifies a post. */
    id: string | number;
  
    /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
    slug: string;
  
    /**  */
    permalink: string;
  
    /**  */
    publish_date: string;
    /**  */
    update_date?: string;
  
    /**  */
    title: string;
    /** Optional summary of post content. */
    excerpt?: string;
    /**  */
    image?: string;
  
    /**  */
    categories?: string[];
    /**  */
    tags?: string[];
    /**  */
    author?: string;
  
    /**  */
    metadata?: string;
  
    /**  */
    draft?: boolean;
  
    /**  */
    Content?: string;
    content?: string;
  
    /**  */
    readingTime?: number;
  }