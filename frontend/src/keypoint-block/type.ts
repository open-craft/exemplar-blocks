export interface KeyPoint {
  keypoint: string,
  description: string
}

export interface KeyPoints {
  keypoints?: KeyPoint[]
}


export interface XBlockData extends KeyPoints {
  header: string,
  button_link: string,
  button_text: string,
}
