import React from 'react'
import { ProjectDetails as DetailsComponent } from '../components'
import { useParams } from 'react-router-dom';
import PageTransition from '../animation/pageTransition/PageTransition';

function ProjectPage() {

    const { id } = useParams();
    // console.log(id);

  return (
    <PageTransition>
      <DetailsComponent id={id} />
    </PageTransition>
  )
}

export default ProjectPage;