/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type Alignment = "start" | "center" | "end";
export type FontSize = "small" | "large";
export type BottomRowOrder = "imageText" | "textImage";
export type Ratio = "9:3" | "8:4" | "7:5" | "6:6" | "5:7" | "4:8" | "3:9";
export type ColumnOrder = "leftAboveRight" | "rightAboveLeft";

export interface ColumnData {
  left: TextLayoutData | LessonListLayoutData | LessonIntroLayoutData | ImageGridLayoutData | EmbedLayoutData;
  right: TextLayoutData | LessonListLayoutData | LessonIntroLayoutData | ImageGridLayoutData | EmbedLayoutData;
  ratio: Ratio;
  order: ColumnOrder;
}
export interface TextLayoutData {
  kind: "text";
  content: string;
  verticalAlignment: Alignment;
}
export interface LessonListLayoutData {
  kind: "lessonList";
  title: string;
  text: string;
  lessons: LessonInfo[];
}
export interface LessonInfo {
  id: string;
  title: string;
}
export interface LessonIntroLayoutData {
  kind: "lessonIntro";
  title: string;
  summary: string;
  lesson: ExtendedLessonInfo;
  showStartLessonButton: boolean;
  previousLesson: ExtendedLessonInfo | null;
}
export interface ExtendedLessonInfo {
  id: string;
  title: string;
  url: string;
}
export interface ImageGridLayoutData {
  kind: "imageGrid";
  featuredImage: ImageInfo;
  bottomImage: ImageInfo;
  text: ImageGridText;
  bottomRowOrder: BottomRowOrder;
}
export interface ImageInfo {
  url: string;
  decorative: boolean;
  alt: string;
  onClickUrl: string;
}
export interface ImageGridText {
  content: string;
  alignment: Alignment;
  fontSize: FontSize;
  backgroundColor: string;
  color: string;
}
export interface EmbedLayoutData {
  kind: "embed";
  html: string;
}
export interface Data {
  displayName: string;
  columns: ColumnData;
  backgroundColor: string;
}
