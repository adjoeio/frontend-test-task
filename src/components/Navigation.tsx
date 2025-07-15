import { NavLink } from "react-router";

export function Navigation() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <NavLink to="/">Overview</NavLink>
      <NavLink to="/campaigns">Campaigns</NavLink>
      <NavLink to="/campaigns/create">Create campaign</NavLink>
    </nav>
  )
}
