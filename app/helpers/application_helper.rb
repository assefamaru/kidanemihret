module ApplicationHelper
    # Returns the full title of a page.
    def full_title(page_title = '')
		base_title = "Hamere Noah Kidane Mihret EOTC"
		if page_title.empty?
			base_title
		else
			page_title + " - " + base_title
		end
	end

    # Strips all whitespace between the
    # HTML tags in the passed block.
    def spaceless(&block)
		contents = capture(&block)
		contents.strip.gsub(/>\s+</, '><').html_safe
	end
end
