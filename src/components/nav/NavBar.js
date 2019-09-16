import React from 'react'
import NavItem from './NavItem'

export const NavBar = (props) => {
  const pages = () => {
    return [
      {title: "Home", path: "/"},
      {title: "Topics", path: `/topics`},
      {title: "Projects", path: `/projects`},
      {title: "Sources", path: `/sources`},
      {title: "Notes", path: `/notes`},
      {title: "Tasks", path: `/tasks`},
      {title: "Tags", path: `/tags`},
    ]
  }

  return (
    <div className="navbar-container">
       {pages().map((page => {
        return <NavItem title={page.title} path={page.path} key={page.title} />
      }))}
    </div>
  )
}
