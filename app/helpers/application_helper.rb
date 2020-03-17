module ApplicationHelper
  # Return full title of a page
  def full_title(page_title = '')
    if page_title.empty?
      "Hamere Noah Kidane Mihret EOTC"
    else
      page_title + " — Kidane Mihret EOTC"
    end
  end

  # Strip all whitespace between HTML tags in passed block
  def spaceless(&block)
    contents = capture(&block)
    contents.strip.gsub(/>\s+</, '><').html_safe
  end
end
