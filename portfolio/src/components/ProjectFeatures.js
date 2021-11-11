const ProjectFeatures = (props) => {
  return (
    <ul>
      {props.features.map((feature) => (
        <li key={feature.substring(0, 20).toString()}>
          {feature}
        </li>
      ))}
    </ul>
  )
}

export default ProjectFeatures;