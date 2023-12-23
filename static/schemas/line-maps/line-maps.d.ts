export type LineMap = Array<{
  drawing: string[];
  isTerminus?: true;
  slugName?: string;
  displayName?: string;
  lineConnections?: Array<{ line: string; slugName: string }>;
}>;
