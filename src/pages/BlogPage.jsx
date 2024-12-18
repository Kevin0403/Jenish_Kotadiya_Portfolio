import React from 'react'
import { BlogDetails as DetailsComponent } from '../components'
import { useParams } from 'react-router-dom';
import PageTransition from '../animation/pageTransition/PageTransition';

function BlogPage() {

    const { id } = useParams();
    // console.log(id);

  return (
    <PageTransition>
      <DetailsComponent id={id} />
    </PageTransition>
  )
}

export default BlogPage;