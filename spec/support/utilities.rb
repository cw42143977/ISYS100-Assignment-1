def full_title(curr_page)

  base_title = "ISYS100 Assignment One"
  if curr_page.empty?
    base_title
  else
    "#{base_title} | #{curr_page}"
  end

end
