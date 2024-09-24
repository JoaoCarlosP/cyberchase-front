import { IBreakpoint } from "../hooks/useBreakpoint"

const QuestionListRules = {
  canEnableTableScroll: (breakpoint: IBreakpoint) => breakpoint.isPhone || breakpoint.isTablet
}

export default QuestionListRules