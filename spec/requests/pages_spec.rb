require 'spec_helper'

describe 'Pages' do
  
  subject { page }

  describe 'Home Page' do
    before { visit root_path }

    it { should have_selector('h1', text: 'Home Page') }
    it { should have_selector('title', text: full_title('Home')) }
  end

  describe 'Help Page' do
    before { visit help_path }

    it { should have_selector('h1', text: 'Help') }
    it { should have_selector('title', text: full_title('Help')) }
  end

  describe 'About Page' do
    before { visit about_path }

    it { should have_selector('h1', text: 'About') }
    it { should have_selector('title', text: 'About') }
  end

  describe 'Contact Page' do
    before { visit contact_path }

    it { should have_selector('h1', text: 'Contact Us') }
    it { should have_selector('title', text: 'Contact') }
  end

  describe 'References Page' do
    before { visit references_path }

    it { should have_selector('h1', text: 'Assignment References') }
    it { should have_selector('title', text: 'Assignment') }
  end

  describe 'Report Page' do
    before { visit report_path }

    it { should have_selector('h1', text: 'Written Report') }
    it { should have_selector('title', text: 'Report') }
  end

  describe 'Specifications Page' do
    before { visit specs_path }

    it { should have_selector('h1', text: 'Assignment Specifications') }
    it { should have_selector('title', text: 'Specifications') }
  end

end
