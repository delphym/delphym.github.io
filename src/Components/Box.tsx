import { Component, createElement, ReactNode } from 'react'

interface BaseProps{
  tag?: string,
  gap?: string,
  children?: ReactNode,
  style?: React.HTMLAttributes<HTMLDivElement> 
}

type Props = BaseProps & React.HTMLAttributes<HTMLElement>

export class Box extends Component<Props> {

  constructor(props: Props){
    super(props)
  }

  render() {
    const {tag, gap, children, style, ...others} = this.props


    return (
      createElement(tag || 'div', {style: {gap, display: 'flex', ...style}, ...others}, children)
    )
  }
}

export class VertBox extends Component<Props> {

  constructor(props: Props){
    super(props)
  }

  render() {
    const {tag, gap, children, style, ...others} = this.props

    return (
      createElement(tag || 'div', {style: {gap, display: 'flex', flexDirection: 'column', ...style}, ...others}, children)
    )
  }
}
