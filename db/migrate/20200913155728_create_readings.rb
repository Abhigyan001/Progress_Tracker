class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.integer "html"
      t.integer "css"
      t.integer "ruby"
      t.integer "rubyonrails"
      t.integer "javascript"
      t.integer "react"
      t.integer "progress"
      t.integer "available"
      t.integer "left"

      t.timestamps
    end
  end
end
