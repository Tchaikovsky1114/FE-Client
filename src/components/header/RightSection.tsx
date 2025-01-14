
import NavSearch from './NavSearch'
import RightNavLinks from './RightNavLinks'

const RightSection = () => {
  return (
    <div className="flex items-center gap-4">
      <NavSearch />
      <RightNavLinks />
    </div>
  )
}

export default RightSection
