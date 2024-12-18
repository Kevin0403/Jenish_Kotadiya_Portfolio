import React, {useEffect} from 'react'
import './Layout.css'
import projects from '../../constants/ProjectDetails'
import Input from '../Input/Input'
import ProjectCard from './card/ProjectCard'

function Layout() {
    const [search, setSearch] = React.useState('')

    
    const [filteredProjects, setFilteredProjects] = React.useState(projects)
    
    async function handleSearch (e){
        setSearch(e.target.value.trim())
    }

    useEffect(() => {
        setFilteredProjects(projects.filter(project => {
            return project.title.toLowerCase().includes(search.toLowerCase()) || project.subTitle.toLowerCase().includes(search.toLowerCase())
        }))
    }
    ,[search])   
    
    


  return (
    <div className='common-container work-container'>
        <div className='details'>
            <h2 className='heading'>Work</h2>
            <p className='sub-heading'>Everything that I have built, alone<br/>or with someone 🔨</p>
        </div>

        <div className='search'>
            
            <Input onChange={handleSearch} placeholder='Search' autocomplete="off" spellcheck="false" svg={<svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" class="input_icon__zsR05"><path d="M17.71 16.29l-3.4-3.39A7.92 7.92 0 0016 8a8 8 0 10-8 8 7.92 7.92 0 004.9-1.69l3.39 3.4a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill="#000"></path></svg>}/>
        </div>

        <div className='projects'>
            <ol>

            {
                filteredProjects.map((project, index) => {
                    return (
                        <li key={index}>
                            <ProjectCard project={project} key={index}/>
                        </li>
                    )
                    })
                    }
            </ol>
        </div>

    </div>
  )
}

export default Layout