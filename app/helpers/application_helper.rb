module ApplicationHelper
    # Return full title of a page.
    def full_title(page_title = '')
        base_title = "Kidane Mihret EOTC"
        if page_title.empty?
            "Kidane Mihret ― Ethiopian Orthodox Tewahedo Church."
        else
            page_title + " ― " + base_title
        end
    end

    # Strip all whitespace between HTML tags in passed block.
    def spaceless(&block)
        contents = capture(&block)
        contents.strip.gsub(/>\s+</, '><').html_safe
    end
end
