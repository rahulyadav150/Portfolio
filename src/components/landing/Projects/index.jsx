
import React, { useContext} from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import { Wrapper, Grid, Item, Content, Stats, Thumb, Tech } from "./styles";
import { projects } from './projectinfo'
import githubLogoWhite from 'assets/illustrations/github_white.png'
import githubLogo from 'assets/illustrations/github_logo.png';





export const Projects = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <Wrapper as={Container} id="projects">
      {projects.length > 0 && <h2>Projects</h2>}
      <Grid>
        {projects.map((project) => (
          <Item
            key={project.title}
            theme={theme}>
            <Card theme={theme}>
              <Thumb >
                <div>
                  <img src={require(`./projectThumbnails/${project.thumbnail}`)} alt='Thumb' className='thumb_img' />
                </div>
              </Thumb>
              <Content>
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <Tech>
                {project.tags.map(tag =>(
                  <span className = 'badge badge-secondary mr-1 my-1'>{tag}</span>
                ))}
                </Tech>
              </Content>
              <div className='d-flex align-items-center ' style={{ marginBottom: '0', marginTop: '1rem' }}>
                <a href={project.githubLink} className='mr-2 ' target="_blank" rel="noreferrer" style={{ width: '40px' }}>
                  <img src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" style={{ width: '100%', margin: '0' }} />
                </a>
                <a href={project.url} >
                  <button type="button" className="btn btn-dark btn-sm">Live Demo</button>
                </a>
              </div>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
