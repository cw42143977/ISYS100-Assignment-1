module ApplicationHelper

  def page_title(curr_title)
    base_title = "ISYS100 Assignment One"
    if curr_title.empty?
      base_title
    else
      "#{base_title} | #{curr_title}"
    end
  end

end
